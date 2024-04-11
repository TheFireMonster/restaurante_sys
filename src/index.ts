console.log("Hello World!")
import express, { Request, Response, NextFunction } from 'express';
const app = express()
import routes from './routes/routes'
import path from 'path'
import createError, { HttpError } from 'http-errors';


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname,'../views'))
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use(routes)

app.get('/', (req: Request, res: Response) => {
    res.redirect('/home')
})

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404))
})

app.use((err: HttpError, req: Request, res: Response, next:NextFunction) => {
  if (!createError.isHttpError(err)) {
      err = createError(500) as HttpError
  }

  const statusCode = err.status || 500;
  res.status(statusCode)
  res.render(`${statusCode.toString()}`)
})
  
app.listen(3000)