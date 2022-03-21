import { useIntl } from "react-intl";

export const useMainNav = () => {
    // const intl = useIntl()

    return ([
        {
            id: "account/accountQuery", 
            // name: intl.formatMessage({id: 'MenuBar.accounts'})
            name: "account"
        }, 
        {
            id: "contact/contactQuery", 
            // name: intl.formatMessage({id: 'MenuBar.contacts'})
            name: "contact"
        }, 
        {
            id: "lead/leadQuery", 
            // name: intl.formatMessage({id: 'MenuBar.leads'})
            name: "lead"
        }, 
        {
            id: "opportunity/opportunityQuery", 
            // name: intl.formatMessage({id: 'MenuBar.opportunities'})
            name: "opportunity"
        }, 
    ])
};
