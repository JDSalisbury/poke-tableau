import React, { useRef, useEffect } from 'react'


const { tableau } = window;


function TableauEmbed() {
    const ref = useRef(null)
    const url = 'https://public.tableau.com/shared/D8F4DQ976'

    const options = {
        device: "desktop",
    }

    function initViz() {
        new tableau.Viz(ref.current, url, options)
    }

    useEffect(() => {
        initViz()
    }, [])

    return (
        <>
            <div ref={ref}></div>
            <p>Tableau Component</p>
        </>
    )
}

export default TableauEmbed;