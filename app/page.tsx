import { title } from "@/components/primitives";

import { CategoryCard } from "@/components/category/category-card";
import { Navbar } from "@/components/navbar";




export default  function Page() {

	
	return (
		<>
			<Navbar />
			<main className=" w-full mx-auto  pt-16 px-6 flex-grow">
				<section className="flex justify-center ">
					<div className="flex flex-col  gap-4 py-8 md:py-10 container max-w-7xl ">
						<div className="inline-block">
							<h1 className={title({ size: 'lg' })}>Make&nbsp;</h1>
							<h1 className={title({ color: "violet", size: 'lg' })}>beautiful&nbsp;</h1>
							<br />
							<h1 className={title({ size: 'lg' })}>
								resume or homepage
							</h1>
						</div>

						<h1 className={`${title()} mt20`}>Choose an item to get started quickly </h1>

						<CategoryCard	></CategoryCard>

					</div>
				</section>
			</main>


		</>

	);
}
