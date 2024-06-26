import Middle from "./Middle";

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
};

const Modal = ({ children, isOpen }: Props) => {
    return (
        <>
        {
            isOpen && (
                <Middle X Y className="fixed top-0 left-0 w-screen h-screen bg-opacity-10 backdrop-blur-xl z-[990]">
                    {children}
                </Middle>
            )

        }
        </>
    );
}

export default Modal;
