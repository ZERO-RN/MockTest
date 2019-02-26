import {NavigationActions} from 'react-navigation';
import {SNavigator} from './SNavigator';


export const nav = (state, action) => {
    switch (action.type) {

        // case 'RedPlan':
        //     return SNavigator.router.getStateForAction(
        //         NavigationActions.navigate({routeName: 'RedPlan'}),
        //         {...state, data: action.data}
        //     );
        default:
            const navigateOnce = (getStateForAction) => (action, state) => {
                const {type, routeName} = action;
                return (
                    state &&
                    type === NavigationActions.NAVIGATE &&
                    routeName === state.routes[state.routes.length - 1].routeName
                ) ? null : getStateForAction(action, state);
            };

//这是第二步
//             SNavigator.router.getStateForAction = navigateOnce(SNavigator.router.getStateForAction);

            // return SNavigator.router.getStateForAction(action, state) || state;
            return navigateOnce(SNavigator.router.getStateForAction)(action, state) || state;
    }
}
