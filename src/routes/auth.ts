import express        from 'express'
import { UserLogin }  from '../modal-interface'

const router  = express.Router()

router.post('/API/login', (req, res) => {
  try {
    const params  : UserLogin.params  = {
      userLogin   : req.body
    }

    const retval  : UserLogin.retval =  {}
    res.cookie('SESSIONID', params.userLogin.userName)
    res.status(200).send(retval)

  } catch(err) {
    throw new Error(err)
  }
})

router.post('/API/signUp', (req, res) =>  {

})

export default router