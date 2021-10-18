import {UserCredentialsDBAccess} from '../src/Authorization/userCredentialsDBAccess'
import { UsersDBAccess } from '../src/User/UserDBAccess'

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
    public userDBaccess: UsersDBAccess = new UsersDBAccess()
}

new DbTest().dbAccess.putUserCredential({
    username: 'user1',
    password: 'pass1',
    accessRights: [1,2,3]
})

new DbTest().userDBaccess.putUser(
    {
        id: '1',
        name: 'Carlos',
        age: 32,
        email: 'carlos.aguilar@gmail.com',
        workingPosition: 1
    }
)