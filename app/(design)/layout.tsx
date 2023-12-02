'use client'
import { MyProvider } from "@/hooks/useData";
import { ReactNode, useEffect, useState } from "react";


type Props = {
	children: ReactNode;
}

async function getData() {
	const res = await fetch('/api/design')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default function Layout({ children }: Props) {

	const [data, setData] = useState<any>()

	useEffect(() => {
		init()
	}, [])

	const init = async () => {
		const data = await getData()
		setData(data.data)
	}


	return (
		<MyProvider value={data}>
			<section className="  h-full   overflow-hidden   " style={{
				background: '#c9d6df'
			}}>
				{children}
			</section>
		</MyProvider>

	);
}
