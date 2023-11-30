
import { BoxCard } from "./box";

const WIDTH = 794

const MIN_HEIGHT = 1090
type Props = {
    className?: string
}
export default function Preview({ className }: Props) {


    return (
        <div className={`${className} overflow-auto sticky top-0 max-h-screen p-10 pt-24 scroll-smooth no-scrollbar  `}>
            <BoxCard style={{
                width: WIDTH,
                minHeight: MIN_HEIGHT
            }}>
                <p>
                    preview
                </p>
            </BoxCard>

        </div>
    );
}



