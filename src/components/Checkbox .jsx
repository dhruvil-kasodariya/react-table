import React from 'react'

 const Checkbox  = React.forwardRef(({indeterminate,...rest},ref)=> {
    const defaultref =React.useRef();
    const resoledRef =ref || defaultref;

    React.useEffect(()=>{
        resoledRef.current.indeterminate =indeterminate
    },[resoledRef,indeterminate
    ])
  return (
    <>
    <input type='checkbox' ref={resoledRef} {...rest}/>
    </>
  )
})

export default Checkbox
