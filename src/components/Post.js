export default function Post({ title, description, content, url, image, publishedAt, source }) {
    return (
        <div className="sm:mr-2 my-6 mx-2">
            <div className="card rounded-md shadow-xl drop-shadow bg-white ">
                <img className="object-cover rounded-md h-52 w-full" src={image} />
                <div className="card-body p-6">
                    <h3 className="font-bold text-2xl overflow-hidden max-h-16">
                        <a href={url}>{title}</a>
                    </h3>
                    <p className="my-4">


                        <span className="rounded-full bg-red-50 shadow px-2 py-1 text-red-400 lowercase mr-2">
                            <a target="_blank" href={source.url}>{source.name}</a>
                        </span>
                        <span className="text-grey-300">
                            {publishedAt}
                        </span>
                    </p>
                    <p className="h-24 overflow-hidden">
                        {content}
                    </p>
                </div>

            </div>
        </div>
    )
}