import Header from "../../components/Header/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "../../styles/post/article.module.css"

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false);
  // console.log(post)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(() => {
      console.log(data)
      setSubmitted(true);
    })
    .catch((err) => {
      console.log(err)
      setSubmitted(false);
    });
  };

  return (
    <div >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque id iusto, consequuntur porro voluptates culpa doloremque rerum nihil quasi nulla pariatur cupiditate quaerat enim temporibus doloribus vero possimus sapiente?
      Illo, reiciendis. Officia, reiciendis saepe tempora quam quod ullam hic in qui eligendi voluptates consequatur odit, quos accusantium eius pariatur. Quam velit assumenda amet error. Nesciunt soluta quos repudiandae laborum.
      Iste atque dignissimos assumenda et quaerat libero? Nisi labore perspiciatis, nulla voluptate voluptatibus harum, eius doloremque officia hic reiciendis, architecto pariatur repellat in dolor maxime quisquam mollitia! Veritatis, nam veniam?
      Aut dolore quasi officia libero molestiae! Quisquam exercitationem, sit, voluptas debitis ab odio quae magni repudiandae sed reiciendis dolor tenetur quia soluta unde eveniet, et quas iste mollitia pariatur ut?
      Eum ducimus fuga quidem. Explicabo quia eveniet facere enim officiis id non beatae aperiam. Quis assumenda voluptas autem maiores adipisci et voluptatum ad iste. Illum deleniti quam modi quod quisquam?
      Eaque voluptatibus soluta maxime ratione officia, facilis impedit eos error! Recusandae, distinctio tempora vero doloribus quasi quidem autem ex consequatur repellat, expedita officiis ea, corrupti atque natus praesentium dolore. Laborum?
      Totam ratione recusandae molestiae assumenda molestias impedit, enim perferendis dolorum, dolor unde eius officiis consectetur cum incidunt hic voluptatem fugiat esse, officia minus sed placeat! Iure non amet autem ea.
      Ab accusantium repudiandae amet saepe. Provident magni quo eligendi recusandae quia voluptas praesentium? Iusto blanditiis inventore ullam sit iure non, quae nisi, aspernatur voluptate dolorem fugit ex illum, quas animi!
      Repudiandae facilis ipsa ipsum iusto eaque dicta, nostrum error qui ex tempora impedit illum hic quibusdam dolore porro velit minus rerum quod maiores sit voluptates deleniti ut. Amet, voluptas sit.
      Ipsa incidunt ratione delectus, nostrum vero ab nulla doloribus ipsum enim eius. Quis, illo possimus explicabo unde saepe sapiente similique, mollitia beatae architecto quas quia ullam commodi, sit ab suscipit?
      Expedita eligendi cum asperiores qui doloribus obcaecati quos, quis aliquid at ut ex non! Doloribus deserunt vitae quis nemo facilis! Placeat obcaecati ipsum quas dicta similique porro nihil hic maiores.
      Esse voluptatibus ratione soluta aliquam quas, architecto dolorem cumque dolorum. Nostrum autem totam, animi corrupti sint adipisci voluptates error delectus quas, odio reprehenderit alias maxime saepe dolorem sunt eos at.
      Quas enim delectus molestias adipisci, exercitationem inventore assumenda, earum voluptatem odio repellendus illum dicta amet blanditiis veniam consectetur. Harum, a maiores magni sapiente laboriosam atque consectetur ullam repudiandae nihil ipsa.
      Odio doloremque maiores laborum qui impedit repellendus, atque, dolores vitae ab nulla repudiandae porro dolorem. Voluptatem enim quia magnam eum modi vero, deserunt ipsam officiis odio, quibusdam, inventore porro minima!
      Enim quos ab incidunt sunt magni dolore voluptatem quam hic assumenda amet! Ex magni qui, facere eveniet aspernatur voluptate rerum enim magnam saepe quaerat sapiente, eaque, quia earum doloremque tempora.
      Minima facilis amet dignissimos fugiat accusamus et, corporis quisquam accusantium repudiandae itaque omnis sit ipsa facere adipisci atque totam maiores reprehenderit numquam consequuntur quasi perferendis alias. Pariatur nobis veritatis vitae.
      Similique qui quis corrupti nihil quia facilis laudantium est. Quia atque unde, eveniet praesentium cum necessitatibus totam quos minus asperiores, magni soluta voluptate, omnis recusandae est impedit nobis culpa corporis!
      Placeat tempora iure excepturi nam. Illum alias itaque est libero ipsum, maxime unde excepturi vitae veniam dolorum in sit eos maiores minima, iure, tenetur illo deserunt quos eum obcaecati natus.
      Libero reiciendis dicta ullam architecto ducimus. Officia labore voluptate cupiditate eaque aspernatur mollitia, inventore et totam maiores nam quo excepturi ex voluptatibus error qui! Harum excepturi velit ipsa architecto quam.
      Modi provident commodi dolores ipsa amet, molestiae voluptatum? Voluptate placeat quod mollitia iusto esse voluptatum cum rerum, nihil suscipit aliquam repudiandae corrupti, rem quae et facere nulla ducimus doloribus soluta.
    </div>

  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
          current
        },
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      author-> {
        name,
        image
      },
      'comments': *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true],
      description,
      mainImage,
      slug,
      body,
      categories[0]
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
