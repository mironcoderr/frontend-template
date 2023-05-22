import Button from "@/components/buttons/Button";
import DetailsCard from "@/components/cards/DetailsCard";
import CommonLayout from "@/layouts/common/CommonLayout";
import Head from "next/head";

export default function Checkout() {
    return (
        <CommonLayout>
            <section className="pt-28 pb-20 bg-gradient-to-tr from-sky-50 to-violet-50">
                <div className="container max-w-6xl">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center mb-5">
                                <h3 className="text-3xl font-bold capitalize mb-2">checkout</h3>
                                <p className="font-medium">This is a secure SSL encrypted payment.</p>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="px-4 py-3 mb-6 rounded-xl flex items-center justify-between border-l-4 border-primary bg-white">
                                <h3 className="first-letter:capitalize font-semibold">already have an account?</h3>
                                <Button route="#" icon="icon-line-login" text="login here" />
                            </div>
                            <DetailsCard title="billing details">
                                <form className="w-full p-5">
                                    <div className="row">
                                        <div className="col-6 py-2">
                                            <label className="text-xs capitalize font-semibold mb-2 after:content-['*'] after:ml-1 after:text-red-500">full name</label>
                                            <input type="text" className="w-full h-10 px-4 rounded-lg placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white" />
                                            {/* <small className="block text-xs font-medium mt-1.5 text-red-500">Please fillup in the requred field</small> */}
                                        </div>
                                        <div className="col-6 py-2">
                                            <label className="text-xs capitalize font-semibold mb-2 after:content-['*'] after:ml-1 after:text-red-500">email address</label>
                                            <input type="email" className="w-full h-10 px-4 rounded-lg placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white" />
                                        </div>
                                        <div className="col-6 py-2">
                                            <label className="text-xs capitalize font-semibold mb-2  after:content-['*'] after:ml-1 after:text-red-500">country name</label>
                                            <select className="w-full h-10 px-4 rounded-lg text-sm capitalize appearance-none placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white">
                                                <option>---</option>
                                                <option>united state</option>
                                                <option>autralia</option>
                                                <option>bangladesh</option>
                                            </select>
                                        </div>
                                        <div className="col-6 py-2">
                                            <label className="text-xs first-letter:capitalize font-semibold mb-2  after:content-['*'] after:ml-1 after:text-red-500">How did you find us?</label>
                                            <select className="w-full h-10 px-4 rounded-lg text-sm capitalize appearance-none placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white">
                                                <option>---</option>
                                                <option>facebook</option>
                                                <option>twitter</option>
                                                <option>linkedin</option>
                                                <option>instagram</option>
                                                <option>google</option>
                                            </select>
                                        </div>
                                        <div className="col-6 py-2">
                                            <label className="text-xs capitalize font-semibold mb-2 after:content-['*'] after:ml-1 after:text-red-500">create password</label>
                                            <input type="password" className="w-full h-10 px-4 rounded-lg placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white" />
                                        </div>
                                        <div className="col-6 py-2">
                                            <label className="text-xs capitalize font-semibold mb-2  after:content-['*'] after:ml-1 after:text-red-500">repeat password</label>
                                            <input type="password" className="w-full h-10 px-4 rounded-lg placeholder:text-xs border border-gray-100 bg-gray-100 transition-all duration-500 focus-within:border-primary focus-within:bg-white" />
                                        </div>
                                        <div className="col-6 py-2"></div>
                                    </div>
                                </form>
                            </DetailsCard>
                            <DetailsCard title="payment methods">
                                <form className="p-5 grid grid-cols-2 gap-x-4 gap-y-6" >
                                    <label htmlFor="paypal" className="relative flex flex-col items-center gap-3 py-7 rounded-xl cursor-pointer bg-gray-100 border-gray-100">
                                        <input type="radio" id="paypal" name="payment" className="custom-checkbox absolute top-4 right-4 before:bg-gray-300" />
                                        <img src="/images/payments/paypal.png" alt="payments" className="h-7" />
                                        <span className="text-sm font-medium capitalize">paypal</span>
                                    </label>
                                    <label htmlFor="stripe" className="relative flex flex-col items-center gap-3 py-7 rounded-xl cursor-pointer bg-gray-100 border-gray-100">
                                        <input type="radio" id="stripe" name="payment" className="custom-checkbox absolute top-4 right-4 before:bg-gray-300" />
                                        <img src="/images/payments/stripe.png" alt="payments" className="h-7" />
                                        <span className="text-sm font-medium capitalize">stripe</span>
                                    </label>
                                    <label htmlFor="visa" className="relative flex flex-col items-center gap-3 py-7 rounded-xl cursor-pointer bg-gray-100 border-gray-100">
                                        <input type="radio" id="visa" name="payment" className="custom-checkbox absolute top-4 right-4 before:bg-gray-300" />
                                        <img src="/images/payments/visa.png" alt="payments" className="h-7" />
                                        <span className="text-sm font-medium capitalize">visa card</span>
                                    </label>
                                    <label htmlFor="master" className="relative flex flex-col items-center gap-3 py-7 rounded-xl cursor-pointer bg-gray-100 border-gray-100">
                                        <input type="radio" id="master" name="payment" className="custom-checkbox absolute top-4 right-4 before:bg-gray-300" />
                                        <img src="/images/payments/master.png" alt="payments" className="h-7" />
                                        <span className="text-sm font-medium capitalize">master card</span>
                                    </label>
                                    <button type="submit" className="col-span-2 rounded-xl flex items-center justify-center gap-3 h-11 bg-emerald-500 text-white btn-animate">
                                        <i className="icon-line-banknotes text-2xl"></i>
                                        <span className="font-medium tracking-wide">Continue to Payment</span>
                                    </button>
                                </form>
                            </DetailsCard>
                        </div>
                        <div className="col-5">
                            <DetailsCard title='order summery'>
                                <ul className="p-5">
                                    <li className="flex gap-4 pb-4 mb-4 last:mb-0 last:pb-0 border-b last:border-none border-gray-100">
                                        <img src="/images/products/hotash.jpg" alt="product" className=" w-20 h-20 rounded-lg object-cover flex-shrink-0"/>
                                        <dl className="flex-auto flex flex-col items-start justify-between">
                                            <dt className="text-sm font-semibold">Hotash - React Admin Dashboard Template</dt>
                                            <dd className='flex items-center gap-2 rounded-full py-1.5 px-2.5 bg-gray-100'>
                                                <img src={`/images/technologies/react.png`} alt='technology' className='h-3' /> 
                                                <span className='text-xs font-medium capitalize tracking-wide whitespace-nowrap'>react template</span>
                                            </dd>         
                                        </dl>
                                        <div className="flex flex-col items-end justify-between">
                                            <button type="button" className="icon-line-trash text-base flex-shrink-0 text-red-500"></button>
                                            <span className="text-xs font-semibold py-1 px-2 rounded-full bg-primary/5 text-primary">$25.10</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 pb-4 mb-4 last:mb-0 last:pb-0 border-b last:border-none border-gray-100">
                                        <img src="/images/products/greeny.jpg" alt="product" className=" w-20 h-20 rounded-lg object-cover flex-shrink-0"/>
                                        <dl className="flex-auto flex flex-col items-start justify-between">
                                            <dt className="text-sm font-semibold capitalize">Greeny - Food Ecommerce HTML Template</dt>
                                            <dd className='flex items-center gap-2 rounded-full py-1.5 px-2.5 bg-gray-100'>
                                                <img src={`/images/technologies/html.png`} alt='technology' className='h-3' /> 
                                                <span className='text-xs font-medium capitalize tracking-wide whitespace-nowrap'>html template</span>
                                            </dd>         
                                        </dl>
                                        <div className="flex flex-col items-end justify-between">
                                            <button type="button" className="icon-line-trash text-base flex-shrink-0 text-red-500"></button>
                                            <span className="text-xs font-semibold py-1 px-2 rounded-full bg-primary/5 text-primary">$18.40</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-5">
                                    <ul className="rounded-2xl border border-gray-100">
                                        <li className="px-4 pb-1.5 pt-3 flex items-center justify-between">
                                            <span className="text-sm font-medium">Subtotal</span>
                                            <span className="text-sm font-medium">$43.50</span>
                                        </li>
                                        <li className="px-4 py-1.5 flex items-center justify-between">
                                            <span className="text-sm font-medium">Discount</span>
                                            <span className="text-sm font-medium">$9.26</span>
                                        </li>
                                        <li className="px-4 pb-3 pt-1.5 flex items-center justify-between">
                                            <span className="text-sm font-medium">Tax Fee</span>
                                            <span className="text-sm font-medium">$2.10</span>
                                        </li>
                                        <li className="px-4 py-3 flex items-center justify-between border-t border-dashed border-gray-100">
                                            <span className="text-sm font-semibold">Total</span>
                                            <spanspan className="text-sm font-semibold text-emerald-500">$43.50</spanspan>
                                        </li>
                                    </ul>
                                </div>
                            </DetailsCard>
                            <div className="p-10 flex flex-col items-center text-center gap-3 rounded-2xl bg-white">
                                <img src="/images/badge.svg" alt="badge" className="w-60" />
                                <h3 className="text-lg font-semibold capitalize">100% Money Back Guarantee</h3>
                                <p className="text-sm">We offer a 14 days money back guarantee if you are unhappy with our products or service. Get a full refund, no hassle, no stress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}