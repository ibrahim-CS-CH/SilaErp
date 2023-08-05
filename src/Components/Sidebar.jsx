import { useTranslation } from "react-i18next"
import {AiFillHome,} from "react-icons/ai"
import {FaProductHunt,FaFileInvoice, FaStore} from "react-icons/fa"
import {GrTransaction} from "react-icons/gr"
import {MdGroups} from "react-icons/md"
import {BsPersonFill} from "react-icons/bs"
import {BiSolidCategoryAlt} from "react-icons/bi"
import { Link } from "react-router-dom"
const Sidebar = () => {
  const { t }= useTranslation()
  return (
    <div className="grid capitalize gap-4">
      <Link to={"home"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <AiFillHome size={"2em"}/>
        <p className="xl:block sm:">{t("home")}</p>
      </Link>
      <Link to={"products"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <FaProductHunt size={"2em"}/>
        <p className="xl:block ">{t("products")}</p>
      </Link>
      <Link to={"categories"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <BiSolidCategoryAlt size={"2em"}/>
        <p className="xl:block ">{t("categories")}</p>
      </Link>
      <Link to={"invoices"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <FaFileInvoice size={"2em"}/>
        <p className="xl:block ">{t("invoices")}</p>
      </Link>
      <Link to={"inventories"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <FaStore size={"2em"}/>
        <p className="xl:block ">{t("inventories")}</p>
      </Link>
      <Link to={"tranactions"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <GrTransaction size={"2em"} />
        <p className="lg:block ">{t("transactions")}</p>
      </Link>
      <Link to={"suppliers"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <BsPersonFill size={"2em"}/>
        <p className="lg:block ">{t("suppliers")}</p>
      </Link>
      <Link to={"clients"} className="flex space-x-2 items-center px-2 hover:bg-gray-200 ">
        <MdGroups size={"2em"}/>
        <p className="lg:block ">{t("clients")}</p>
      </Link>

    </div>
  )
}

export default Sidebar