import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides'
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation/overrides'

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P]
}

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey extends overridesNameToClassKey, LabComponentNameToClassKey {}
}
