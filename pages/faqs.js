import useSWR from 'swr'
import CommonLayout from '@/layouts/common/CommonLayout';
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

export default function Faqs() {
    const fetcher = (...data) => fetch(...data).then((res) => res.json());
    const { data, isLoading } = useSWR('/api/faqs', fetcher);
    const [accordion, setAccordion] = useState(-1);

    const handleAccordion = (index) => {
        setAccordion(index === accordion ? -1 : index);
    }

    return (
        <CommonLayout>
            <section className="pt-28 pb-20">
                <SectionHeading title="Questions" headline="The most downloaded products among our best templates" />
                <div className="container">
                    <div className="grid grid-cols-2 items-start gap-y-6 gap-x-8">
                        {
                            isLoading ? 'Loading...' :
                            data?.map((faq, dig) => (
                                <div key={ dig } className="rounded-lg bg-gray-100">
                                    <div onClick={() =>handleAccordion(dig)} className="py-3.5 px-4 flex items-center gap-2 cursor-pointer text-heading">
                                        <span className="text-base font-medium w-full whitespace-nowrap text-ellipsis overflow-hidden">{ faq.que }</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    {
                                        dig === accordion && 
                                        <p className="py-3.5 px-4 text-sm leading-6 border-t border-gray-200">{ faq.ans }</p>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </CommonLayout>
    )
}