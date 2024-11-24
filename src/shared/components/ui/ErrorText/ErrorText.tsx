import { cn } from "@/shared/lib";

interface IProps {
    text: string;
    className?: string;
}

const ErrorText: React.FC<IProps> = ({ text, className }) => (
    <p className={cn('text-red-500 text-sm', className)}>{text}</p>
);

export default ErrorText;
