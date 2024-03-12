import React from 'react'


type Props = Partial<HTMLDivElement>

function Divider(props:Props) {
    const {className} = props
  return (
    <div className={" divide-solid divide-y divide-slate-300"+ className}>
        <div>Items</div>
        <div></div>
    </div>
  )
}

export default Divider