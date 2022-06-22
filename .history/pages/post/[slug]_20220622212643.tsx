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
    <div className={styles.page}>
      <Header />
      <img
        className={styles.img}
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      <div style={{fontSize:18}}>
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        <h2 className={styles.description}>
          {post.description}
        </h2>
        <div className={styles.intro_div}>
          <img
            className={styles.author_pic}
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className={styles.post_detail}>
            Blog post by{" "}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nihil nemo hic sunt, dolorem impedit quos aliquid! Sint rerum dolor voluptates deserunt at possimus facere accusamus, quidem vel veritatis fugiat.
        Accusantium mollitia ea sed expedita quae voluptate. Nam neque doloremque facere repudiandae nulla nemo nostrum cum itaque fugiat reiciendis assumenda, praesentium sed dolorem labore dolorum accusantium rem repellendus facilis iusto!
        Veritatis rerum nulla culpa corporis excepturi, provident repudiandae aspernatur accusantium maxime at molestias fugit aliquam similique vero eaque error tenetur perspiciatis. Corporis totam, facilis rem adipisci unde exercitationem vitae molestiae.
        Perferendis fuga architecto ea deleniti, debitis commodi modi aliquid facilis sequi id laborum voluptates eos reprehenderit, maiores magnam, quod vitae expedita labore. Quod earum iusto id aliquam reprehenderit dolore perferendis.
        Officia et ducimus illum voluptates laudantium quas, eveniet tenetur maxime, minima ut, dolore doloremque earum eum provident nihil? Aperiam in animi minima mollitia fuga dolorum repellat deserunt dicta doloremque nam.
        Ullam inventore consequatur, esse expedita atque soluta, qui molestias labore obcaecati magnam quibusdam quaerat sequi suscipit sint quia neque assumenda illum facere unde placeat? Voluptatibus odit natus deleniti! Alias, ex.
        Labore pariatur adipisci, ab doloribus necessitatibus molestiae dolore mollitia, reprehenderit commodi ipsam autem est temporibus quis tempora ullam, magni veniam repudiandae ex ducimus suscipit accusamus facilis laborum porro. Nesciunt, dicta.
        Similique minima eos molestias unde eius architecto mollitia accusamus earum aspernatur quo ipsa consectetur debitis fugit velit, dignissimos, blanditiis dolorem assumenda error nulla corrupti exercitationem impedit illo quisquam maiores! Numquam?
        Eos eveniet aperiam maiores placeat. Laudantium, esse! Quis corrupti enim temporibus dolores est libero, officia, pariatur porro officiis odit tempora repellat aut iusto vero saepe illum nihil neque minus atque.
        At, nihil facere! Error eos est optio quisquam molestiae incidunt praesentium illum quam eaque? Beatae sapiente amet at asperiores laborum, possimus ea vero quisquam similique quos doloribus consequuntur obcaecati mollitia.

        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "production"}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "n6repj5a"}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className={styles.h1} {...props} />
              ),
              h2: (props: any) => (
                <h2 className={styles.h2} {...props} />
              ),
              h3: (props: any) => (
                <h3 className={styles.h3} {...props} />
              ),
              li: ({ children }: any) => (
                <li className={styles.list}>{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className={styles.link}>
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      </div>

      <hr className="max-w-lg my-5 mx-auto border border-green-500" />

      {submitted ? (
        <div className={styles.success_comment} >
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ): (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
        <h3 className={styles.form_question}>
          Is this article helpful for you?
        </h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-3 mt-2" />

        <input 
          {...register("_id")} 
          type="hidden" 
          name="_id" 
          value={post._id} 
        />

        <label className="block mb-5">
          <span>Name</span>
          <div className={styles.name_cont}>
            <input
              {...register("name", { required: true })}
              className={styles.input_name}
              placeholder="Friday Cui"
              type="text"
            />
          </div>
        </label>
        <label className="block mb-5">
          <span>Email</span>
          <input
            {...register("email", { required: true })}
            className={styles.input_name}
            placeholder="Friday0717@gmail.come"
            type="email"
          />
        </label>
        <label className="block mb-5">
          <span className="text-gray-700">Comment</span>
          <textarea
            {...register("comment", { required: true })}
            className={styles.input_name}
            placeholder="Try typing some comments here!"
            rows={8}
          />
        </label>

        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">- A Name Is Required</span>
          )}
          {errors.comment && (
            <span className="text-red-500">- The Comment Field Is Required</span>
          )}
          {errors.email && (
            <span className="text-red-500">- An Email Is Required</span>
          )}
        </div>

        <input type="submit" className={styles.submit_button}/>
      </form>
      )}
    
      <div className={styles.show_comment}>
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2"/>
        {post.comments.map((comment) => (
          <div key={comment._id} style={{paddingBottom: 20}}>
            <p>
              <span className="text-green-700">{comment.name}</span>: {comment.comment}
            </p>
          </div>
        ))}
      </div>

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
