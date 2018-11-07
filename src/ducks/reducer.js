const initialState = {
    "Property Name": "",
    "Address": "",
    "City": "",
    "State": "",
    "Zip Code": "",
    "Image URL": "",
    "Monthly Mortgage Amount": "",
    "Desired Monthly Rent": ""
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE';
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO';
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';
const CLEAR_STATE = 'CLEAR_STATE';

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case UPDATE_STEP_ONE:

            return {
                "Property Name": action.payload["Property Name"],
                "Address": action.payload["Address"],
                "City": action.payload["City"],
                "State": action.payload["State"],
                "Zip Code": action.payload["Zip Code"],
                "Image URL": state["Image URL"],
                "Monthly Mortgage Amount": state["Monthly Mortgage Amount"],
                "Desired Monthly Rent": state["Desired Monthly Rent"]
            }

        case UPDATE_STEP_TWO:

            return {
                "Property Name": state["Property Name"],
                "Address": state["Address"],
                "City": state["City"],
                "State": state["State"],
                "Zip Code": state["Zip Code"],
                "Image URL": action.payload["Image URL"],
                "Monthly Mortgage Amount": state["Monthly Mortgage Amount"],
                "Desired Monthly Rent": state["Desired Monthly Rent"]
            }

        case UPDATE_STEP_THREE:

            return {
                "Property Name": state["Property Name"],
                "Address": state["Address"],
                "City": state["City"],
                "State": state["State"],
                "Zip Code": state["Zip Code"],
                "Image URL": state["Image URL"],
                "Monthly Mortgage Amount": action.payload["Monthly Mortgage Amount"],
                "Desired Monthly Rent": action.payload["Desired Monthly Rent"]
            }

        case CLEAR_STATE:

            return action.payload

        default:

            return state
    }
}

// Action creators
export function updateStepOne(propertyName, address, city, state, zip_code) {
    return {
        type: UPDATE_STEP_ONE,
        payload: {
            "Property Name": propertyName,
            "Address": address,
            "City": city,
            "State": state,
            "Zip Code": zip_code
        }
    }
}

export function updateStepTwo(image_url) {
    return {
        type: UPDATE_STEP_TWO,
        payload: {
            "Image URL": image_url
        }
    }
}

export function updateStepThree(monthly_mortgage_amount, desired_monthly_rent) {
    return {
        type: UPDATE_STEP_THREE,
        payload: {
            "Monthly Mortgage Amount": monthly_mortgage_amount,
            "Desired Monthly Rent": desired_monthly_rent
        }
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE,
        payload: initialState
    }
}