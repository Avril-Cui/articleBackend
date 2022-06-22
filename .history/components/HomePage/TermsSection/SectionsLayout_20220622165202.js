import Sections from "./Sections";
import accounting_pic from "../../../image/accounting_pic.png";
import valuation_pic from "../../../image/valuation_pic.png";
import portfo_pic from "../../../image/portfo_pic.png";
import defi_pic from "../../../image/defi_pic.png";
import Link from "next/link";

const SectionsLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 ">
      <Link href="/terms/accounting">
        <div style={{ marginTop: 40, marginLeft: 0 }}>
          <Sections
            img_source={accounting_pic}
            section_name="Accounting"
            section_description="What are the three financial statements? How to tell if a company has a health business operation? How is a company’s profitability?"
          />
        </div>
      </Link>
      <Link href="/terms/valuation">
        <div style={{ marginTop: -370, marginLeft: 320 }}>
          <Sections
            img_source={valuation_pic}
            section_name="Valuation"
            section_description="Does the company’s stock appropriately valuates the actual value of the company? Various valuation metrics and models are included."
          />
        </div>
      </Link>
      <Link href="/terms/portfolio">
        <div style={{ marginTop: -370, marginLeft: 640 }}>
          <Sections
            img_source={portfo_pic}
            section_name="Portfolio Management"
            section_description="What is the relationship between risk and return? What is an efficient portfolio? What are some logical approaches to manage a portfolio?"
          />
        </div>
      </Link>
      <Link href="/terms/defi">
        <div style={{ marginTop: -370, marginLeft: 960 }}>
          <Sections
            img_source={defi_pic}
            section_name="De-Fi"
            section_description="What is decentralized finance? How is it different from the centralized finance? What are the mechanisms behind it? What are its applications?"
          />
        </div>
      </Link>
    </div>
  );
};

export default SectionsLayout;
