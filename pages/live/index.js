import { useState, useEffect, } from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from "@material-ui/core"

import Layout from '../../src/components/Layout'
import LivePlayer from '../../src/components/view/live/LivePlayer'
import LoginCover from '../../src/components/view/header/LoginCover'
import PaymentCover from '../../src/components/view/header/PaymentCover'
import Header from '../../src/components/view/header/SubHeader'
import { ActionCreators as action } from '../../src/redux/actions'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    iframe: {
      marginTop: theme.spacing(1),
      border:'none'
    }
  })
)

const LivePage = (props) => {
  const classes = useStyles(props)
//  const { data } = useSelector((state) => state.authUser)
  const dispatch = useDispatch()
  const [logged, setLogged] = useState(false)
  const [paid, setPaid] = useState(false)

  useEffect(() => {
/*    (async () =>{
      console.log(window.sessionStorage.getItem(`firebase:authUser:${process.env.NEXT_PUBLIC_ENV_API_KEY}:[DEFAULT]`))
      //      await dispatch(action.checkUser())
    })()*/
    _setLog()
  }, [])

  const _setLog = () => {
    let user = JSON.parse(window.sessionStorage.getItem(`firebase:authUser:${process.env.NEXT_PUBLIC_ENV_API_KEY}:[DEFAULT]`))

    if(user.uid === null) {
      setLogged(false)
    } else {
      setLogged(true)
    }
  }

  const _checkStatus = () => {
    if(logged && paid) {
      return <LivePlayer />
    } else if(logged && !paid){
      return  <PaymentCover />
    } else {
      return  <LoginCover onClick={() => _onLogin()} />
    }
  }

  const _onLogin = async () => {
    await dispatch(action.loginFromGoogle())
    _setLog()
  }

  return(
    <Layout className={classes.root} title="KaranTiVi Panggung Virtual &bull; KaranTiVi">
      <Header />
      { _checkStatus() }
    </Layout>
  )
}

export default LivePage