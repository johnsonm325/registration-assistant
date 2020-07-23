import { Button, Stack, StackItem, Title } from '@patternfly/react-core';
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import React from 'react';
import { addNotification } from '@redhat-cloud-services/frontend-components-notifications/';
import messages from '../../Messages';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

const Register = () => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const handleAlert = () => {
        dispatch(
            addNotification({
                variant: 'success',
                title: 'Notification title',
                description: 'notification description'
            })
        );
    };

    return (
        <React.Fragment>
            <PageHeader>
                <PageHeaderTitle title={ intl.formatMessage(messages.registerYourSystems) } />
            </PageHeader>
            <Main>
                <Stack hasGutter>
                    <StackItem>
                        <Title headingLevel="h2" size="3xl"> Alerts </Title>
                        <Button variant='primary' onClick={handleAlert}> Dispatch alert </Button>
                    </StackItem>
                    <StackItem>
                    </StackItem>
                </Stack>
            </Main>
        </React.Fragment>
    );
};

export default withRouter(Register);
