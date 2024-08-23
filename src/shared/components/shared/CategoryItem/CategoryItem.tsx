import { FC } from "react";
import { cn } from "@/shared/lib";
import Link from "next/link";

interface IProps {
    className?: string;
    href?: string;
    text: string;
}

const CategoryItem: FC<IProps> = ({ text, className, href }) => {
    return (
        <Link
            href={href}
            className={cn(
                'flex items-center font-bold h-11 rounded-2xl px-5 cursor-default',
                className,
            )}
        >
            {text}
        </Link>
    );
};

export default CategoryItem