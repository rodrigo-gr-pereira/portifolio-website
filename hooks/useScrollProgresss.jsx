import React, {useState, useEffect} from 'react'

const useScrollProgresss = () => {
    const [completion, setCompletion] = useState(0);

    useEffect (() =>{
        const updateScroolCompletion = () =>{
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight){
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };

        //event
        window.addEventListener('scroll', updateScroolCompletion);
        //clear event
        return()=> window.removeEventListener('scroll', updateScroolCompletion);
    }, []);


  return completion;
};

export default useScrollProgresss