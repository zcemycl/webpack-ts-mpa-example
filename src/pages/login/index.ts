import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'
export const app = new Controller(new Model(), new View())
// export default app.userPool;
