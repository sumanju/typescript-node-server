  import express        from 'express'
  import { UserLogin }  from '../modal-interface'
  import  jwt           from 'jsonwebtoken'

const router  = express.Router()

router.post('/API/login', (req, res) => {
  try {
    const params  : UserLogin.params  = {
      userLogin   : req.body
    }
    const retval  : UserLogin.retval =  {},
          token   : any              =  jwt.sign(params.userLogin.userName, 'shh',  { algorithm   : 'HS256' })

    res.cookie('SESSIONID', token, { httpOnly : true  })

    res.status(200).send(retval)

  } catch(err) {
    throw new Error(err)
  }
})

export default router