import db from "@/lib/db";
import { redirect } from "next/navigation";
import NavbarAdmin from "@/components/NavbarAdmin";
import BootstrapClient from "@/components/BootstrapClient";
import SuccessAlert from "@/components/SuccessAlert";
 


export default function CreateProduct() {

    async function createProduct(formData) {
    "use server";

    const name = formData.get("name");
    const price = formData.get("price");
    const img_url = formData.get("img_url");
    const description = formData.get("description");
    const stock = formData.get("stock");

    await db.query(
        `INSERT INTO products 
        (name, price, img_url, description, stock)
        VALUES (?, ?, ?, ?, ?)`,
        [name, price, img_url, description, stock]
    );

    redirect("/admin/products?success=create");
}




    return (
        <>
         <SuccessAlert />
         
             <NavbarAdmin />
            
            <BootstrapClient />
       
        <div className="container mt-5">

            <h1 className="mb-4">เพิ่มสินค้า
            

</h1>

            <form action={createProduct}>

                <div className="mb-3">
                    <label className="form-label">
                        ชื่อสินค้า
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Product name"
                        required
                        minLength={10}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        ราคา
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        min={0}
                        placeholder="price"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        URL รูปภาพ
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="img_url"
                        placeholder="img_url"
                        required
                        minLength={5}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        รายละเอียด
                    </label>

                    <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        placeholder="description"
                        required
                        minLength={5}
                        
                    ></textarea>
                </div>

                    <div className="mb-3">
                    <label className="form-label">
                        QTY
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        name="stock"
                        min={0}
                        placeholder="stock"
                    />
                </div>

                <button className="btn btn-primary">
                    บันทึกสินค้า
                </button>

            </form>

        </div>
     </>
    );
}

