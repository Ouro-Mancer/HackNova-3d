import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={clsx(
                "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-8 py-3 text-black font-general tracking-wide text-sm bg-white transition-all duration-300 ",
                containerClass
            )}
        >
            {leftIcon}

            <span className="relative inline-flex overflow-hidden text-sm uppercase">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 text-black">
                    {title}
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    {title}
                </div>
            </span>

            {rightIcon}
        </button>
    );
};

export default Button;
