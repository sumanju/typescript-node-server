import express from 'express'
import { UserLogin } from '../modal-interface'
const router  = express.Router()

router.post('/API/login', (req, res) => {
  try {
    console.log('12',req.body)
    const params  : UserLogin.params  = {
      userLogin   : req.body
    }
    console.log('13', params)
    const retval  : UserLogin.retval =  {}
    res.status(200).send(retval)
  } catch(err) {
    throw new Error(err)
  }
})

router.post('/API/signUp', (req, res) =>  {

})

export default router