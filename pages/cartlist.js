import CommonLayout from "@/layouts/common/CommonLayout";

export default function CartList() {
    return (
        <CommonLayout>
            <section className="pt-28 pb-20 bg-gradient-to-tr from-sky-50 to-violet-50">
                <div className="container max-w-6xl">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center mb-5">
                                <h3 className="text-3xl font-bold capitalize mb-2">cartlist</h3>
                                <p className="font-medium">Explore your cart items here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}