import express      from 'express'
import { Book, 
         Bookdtl 
       }            from '../modal-interface'
import jwt          from 'jsonwebtoken'

const bookData  : Bookdtl[] = [
  {
    bookId    : '121',
    bookName  : 'asdsad'
  },
  {
    bookId    : '122',
    bookName  : 'dfdsf'
  },
  {
    bookId    : '123',
    bookName  : 'ghgfhg'
  }
]

const router  = express.Router()

router.post('/API/book', (req, res) => {
  try {
    const decode  = jwt.verify(req.cookies.SESSIONID, 'shh') 

    const resp    = bookData.filter((ele) =>  {
      return ele.bookId ==  decode
    })

    const retval  : Book.retval =  {
      book        : resp[0]
    }

    res.status(200).send(retval)
    
  } catch(err) {
    throw new Error(err)
  }
})

export default router