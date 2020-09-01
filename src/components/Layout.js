import { createStyles, makeStyles } from "@material-ui/core/styles"
import React from 'react'
import Head from 'next/head'
import Footer from '../components/view/footer/MainFooter'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
    },
  })
)

const Layout = (props) => {
  const { children, className, title } = props
  const classes = useStyles(props)
  return (
    <section className={`${classes.root} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
      <Footer />
    </section>
  )
}

export default Layout
