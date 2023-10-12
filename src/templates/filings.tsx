import { LateFilings } from '../types/late-filings'
import { PageProps } from 'gatsby'
import * as React from 'react'

type Props = PageProps<unknown, {lateFilings: LateFilings}>

const Filings = (props: Props) => {
    console.dir(props.pageContext.lateFilings)
    return (
        <div>filings</div>
    )
}

export default Filings
