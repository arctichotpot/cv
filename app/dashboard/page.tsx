import { title } from "@/components/primitives";
import { TemplateModal } from "./template-modal";
import resume from "@/assets/images/resume.png"
import website from "@/assets/images/website.png"
 

export default function Page() {

    const items = [
        {
            title: "Resume",
            img: resume.src,
            type: 'resume'
        },
        {
            title: "Homepage",
            img: website.src,
            type: 'homepage'
        }
    ]

    return (
        <>
            <h1 className={title({ size: 'lg' })}>What do you want to design?</h1>

            <div className="gap-2 grid grid-cols-2 mt-10">


                {
                    items.map(item => <TemplateModal key={item.type} type={item.type} title={item.title} img={item.img} />)
                }
            </div>


        </>
    );
}
