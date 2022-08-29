import { serverHttp } from './serverHttp';
import './websocket'

serverHttp.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port "+ process.env.PORT );
})