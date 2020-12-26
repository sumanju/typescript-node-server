import express      from 'express'
import { Book, 
         Bookdtl 
       }            from '../modal-interface'

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
    const resp  = bookData.filter((ele) =>  {
      return ele.bookId ==  req.cookies.SESSIONID
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