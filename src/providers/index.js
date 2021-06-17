import { WindowSizeProvider } from "./windowSize";
import { FormDataProvider } from './formData';
import { LoginRequestProvider } from "./login";
import { GoalsRequestsProvider } from "./addNewGoal";
import { GroupsProvider } from './groups';

const providers = ({ children }) => {
    return(
        <LoginRequestProvider>
            <WindowSizeProvider> 
                <GoalsRequestsProvider>  
                    <FormDataProvider>
                        <GroupsProvider>
                            {children}
                        </GroupsProvider>
                    </FormDataProvider>
                </GoalsRequestsProvider>
            </WindowSizeProvider>
        </LoginRequestProvider>
    )
}

export default providers;