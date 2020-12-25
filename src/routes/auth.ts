import express from 'express'
import { UserLogin } from '../modal-interface'
const router  = express.Router()

router.post('/API/login', (req, res) => {
  
  try {
    const params  : UserLogin.params = req.body
    res.cookie('asd', 'sad')
    const retval  : UserLogin.retval =  {}
    res.status(200).send(retval)
  } catch(err) {
    throw new Error(err)
  }
})

router.post('/API/signUp', (req, res) =>  {

})

export default router