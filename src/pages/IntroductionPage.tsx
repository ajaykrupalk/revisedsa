export default function IntroductionPage() {
    return (
        <>
            <div className="w-full p-4 lg:w-[45em] lg:p-0">
                <div>
                    <p className="text-sm font-medium">
                        <span className="text-gray-500">
                            Getting Started&thinsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" className="inline-block align-middle stroke-gray-400" data-src="https://cdn.hugeicons.com/icons/greater-than-solid-rounded.svg" role="img">
                                <path d="M5.98808 3.26631C5.58283 3.8252 5.70738 4.6068 6.26627 5.01205L14.5968 11.0526C15.1362 11.4436 15.4604 11.7232 15.6433 11.9315C15.6661 11.9575 15.6849 11.9804 15.7003 12.0001C15.6849 12.0198 15.6661 12.0426 15.6433 12.0687C15.4604 12.277 15.1362 12.5565 14.5968 12.9476L6.26627 18.9881C5.70738 19.3934 5.58283 20.175 5.98808 20.7339C6.39334 21.2928 7.17493 21.4173 7.73382 21.0121L16.0644 14.9715C16.638 14.5556 17.1485 14.1435 17.5221 13.7179C17.8966 13.2913 18.25 12.7189 18.25 12.0001C18.25 11.2813 17.8966 10.7089 17.5221 10.2823C17.1485 9.85665 16.638 9.44459 16.0644 9.02865L7.73382 2.98813C7.17493 2.58287 6.39334 2.70742 5.98808 3.26631Z" fill="#000000"></path>
                            </svg>
                        </span>&thinsp;Introduction
                    </p>
                </div>
                <div className="mt-3 text-base text-slate-950">
                    <h1 className="text-2xl font-semibold">Introduction</h1>
                    <div className="text-base mt-2 text-slate-900 font-normal leading-loose text-wrap">
                        <p>This is a collection of notes that I am curating during my learning journey of Data Structures and Algorithms as a quick reference.
                        </p>
                        <p>I am planning to cover the notes in <span className="font-medium">Python</span>, since it’s very simple, provides most in-built functions, and is very popular in coding interviews.
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="text-base font-semibold">What all will be covered?</h3>
                    <div className="text-base mt-2 text-slate-900 font-normal leading-loose text-wrap">
                        <p>All the concepts of data structures and algorithms will be covered along with problems that occur in the Blind 75 list.</p>
                        <p>For any feedback, <a className="underline underline-offset-2" href="https://github.com/ajaykrupalk/revisedsa/issues" target="_blank">click here</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
