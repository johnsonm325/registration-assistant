/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import './Helpers.scss';

import { CloudIcon, CogsIcon, DownloadIcon, ShieldAltIcon } from '@patternfly/react-icons';
import { Text, TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/esm/components/Text/index';
import { Title, TitleSizes } from '@patternfly/react-core/dist/esm/components/Title/Title';

import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';
import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import messages from '../../Messages';

const learnMore = (intl, url = '#') => <Button className='learnMore' isInline component='a' variant='link' href={url} >{intl.formatMessage(messages.learnMore)}</Button>;

const rhelNoAutomationSnippet = intl => <React.Fragment>
    <pre className='ins-c-gray'>
        <code>
            [root@server -]# insights-client --register
        </code>
    </pre>
    <Button component='a' variant='primary' href='https://access.redhat.com/solutions/1583183' >{intl.formatMessage(messages.viewInsightsDashboard)}</Button>
</React.Fragment>;

const manualInstall = intl => <React.Fragment>
    <pre className='ins-c-gray'>
        <code>
            [root@server -]# yum install insights-client
        </code>
    </pre>
    {rhelNoAutomationSnippet(intl)}
</React.Fragment>;

const stepTitle = (intl, title, stepNum) => <Title headingLevel='h3'>{intl.formatMessage(messages.stepNumberTitle, { number: stepNum, variable: title })}</Title>;

const schema = intl => ({
    fields: [{
        component: componentTypes.RADIO,
        name: 'how-are-systems-managed',
        initializeOnMount: true,
        initialValue: 'rhsm',
        label: intl.formatMessage(messages.systemsManaged),
        options: [
            { label: intl.formatMessage(messages.rhsm), value: 'rhsm' },
            { label: intl.formatMessage(messages.rhs), value: 'rhs' },
            { label: intl.formatMessage(messages.publicCloud), value: 'rhui' }]
    }, {
        component: componentTypes.RADIO,
        name: 'rhel-os',
        initializeOnMount: true,
        initialValue: 'rhel8',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.operatingSystem),
        condition: { when: 'how-are-systems-managed', is: 'rhsm' },
        options: [
            { label: intl.formatMessage(messages.rhel8), value: 'rhel8' },
            { label: intl.formatMessage(messages.rhel76), value: 'rhel76' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhel-os-helper',
        label: <TextContent> <Text component={TextVariants.small}>{intl.formatMessage(messages.operatingSystemNote, {
            rhSupported: <Button isInline component='a' variant='link' href='https://access.redhat.com/support/policy/updates/errata' >{intl.formatMessage(messages.rhSupported)}</Button>
        })}</Text></TextContent>,
        condition: { when: 'rhel-os', is: 'rhel76' }
    }, {
        component: componentTypes.RADIO,
        name: 'automation',
        initializeOnMount: true,
        initialValue: 'no',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.useAutomation),
        condition: { when: 'how-are-systems-managed', is: 'rhsm' },
        options: [
            { label: intl.formatMessage(messages.ansible), value: 'ansible' },
            { label: intl.formatMessage(messages.puppet), value: 'puppet' },
            { label: intl.formatMessage(messages.no), value: 'no' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhsm-rhel76-no',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.installTheClient), 2)}
            {manualInstall(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'no' }, { when: 'how-are-systems-managed', is: 'rhsm' }, { when: 'rhel-os', is: 'rhel76' }]
    }, {
        component: 'plain-text',
        name: 'rhsm-rhel8-no',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.registerYourSystems), 2)}
            {rhelNoAutomationSnippet(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'no' }, { when: 'how-are-systems-managed', is: 'rhsm' }, { when: 'rhel-os', is: 'rhel8' }]
    }, {
        component: 'plain-text',
        name: 'rhsm-puppet',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.downloadPuppet), 2)}
            <Button variant="primary" className='pf-m-display-lg' icon={<DownloadIcon />} component='a' href='https://forge.puppet.com/lphiri/access_insights_client'>
                {intl.formatMessage(messages.downloadModule)}
            </Button>
            {stepTitle(intl, intl.formatMessage(messages.installAndConfigure), 3)}
            <Title headingLevel='h2'>{intl.formatMessage(messages.automatedInstallation)}</Title>
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstall, {
                    class: <strong>access_insights_clients</strong>
                })}</Text>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}</Text>
            </TextContent>

            <Title headingLevel='h2'>{intl.formatMessage(messages.manualInstall)}</Title>
            {manualInstall(intl)}
        </React.Fragment>,
        condition: [{ when: 'automation', is: 'puppet' }, { when: 'how-are-systems-managed', is: 'rhsm' }]
    }, {
        component: componentTypes.RADIO,
        name: 'rhs-automation',
        initializeOnMount: true,
        initialValue: 'puppet',
        clearOnUnmount: true,
        label: intl.formatMessage(messages.rhsChooseConfigMan),
        description: intl.formatMessage(messages.rhsChooseConfig),
        condition: { when: 'how-are-systems-managed', is: 'rhs' },
        options: [
            { label: intl.formatMessage(messages.ansible), value: 'ansible' },
            { label: intl.formatMessage(messages.puppet), value: 'puppet' }
        ]
    }, {
        component: 'plain-text',
        name: 'rhsm-puppet',
        label: <React.Fragment>
            {stepTitle(intl, intl.formatMessage(messages.deployRHI), 2)}
            <Button variant="primary" className='pf-m-display-lg' icon={<DownloadIcon />} component='a' href='https://forge.puppet.com/lphiri/access_insights_client'>
                {intl.formatMessage(messages.downloadModule)}
            </Button>
            <TextContent>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstall, {
                    class: <strong>access_insights_clients</strong>
                })}</Text>
                <Text component={TextVariants.p}>{intl.formatMessage(messages.puppetAutomatedInstallMoInfo)}</Text>
            </TextContent>
            <Button component='a' variant='primary' href='https://access.redhat.com/solutions/1583183' >{intl.formatMessage(messages.viewInsightsDashboard)}</Button>
        </React.Fragment>,
        condition: [{ when: 'rhs-automation', is: 'puppet' }, { when: 'how-are-systems-managed', is: 'rhs' }]
    }
    ]
});

const DataCollection = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><ShieldAltIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.dataCollection)}
        {learnMore(intl, 'https://marvelapp.com/prototype/77d4f5b/screen/71352111')}
    </Title>
</React.Fragment>;

const SetupConfigure = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><CogsIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.setupConfigure)}</Title>
    <TextContent >
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.assessAndMonitor)}
            {learnMore(intl, 'https://access.redhat.com/documentation/en-us/red_hat_insights/2020-04/html/monitoring_and_reacting_to_configuration_changes_using_policies/')}
        </Text>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.detectAndNotify)}
            {learnMore(intl, 'https://www.redhat.com/en/technologies/management/smart-management')}
        </Text>
    </TextContent>
</React.Fragment>;

const SmartManagement = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4'><CloudIcon size='md' className='ins-c-icon' />{intl.formatMessage(messages.rhSM)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.combineTheFlexible)}
            {learnMore(intl, 'https://www.redhat.com/en/technologies/management/smart-management')}
        </Text>
    </TextContent>
</React.Fragment>;

const RegisterWithRhsm = ({ intl }) => <React.Fragment>
    <Title headingLevel='h4' size={TitleSizes.xl}>{intl.formatMessage(messages.registerRhsm)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.registerRhsmText)}
        </Text>
        <pre>
            <code>
                [root@server ~]# subscription-manager <br />
                register --auto-attach
            </code>
        </pre>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.registerRhsmTextNote,
            { basicAuth: <Button isInline component='a' variant='link' href='https://access.redhat.com/documentation/en-us/red_hat_insights/2020-04/html/assessing_and_monitoring_security_policy_compliance_of_rhel_systems/' >{intl.formatMessage(messages.basicAuth)}</Button> })}
        </Text>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.registerRhsmTextNoteAfter,
            { howToAccess: <Button isInline component='a' variant='link' href='https://access.redhat.com/solutions/1583183' >{intl.formatMessage(messages.howToAccess)}</Button> })}</Text>
    </TextContent>
</React.Fragment>;

const SubscribetoSatellite = ({ intl }) => <React.Fragment>
    <Title headingLevel='h3'>{intl.formatMessage(messages.subscribeSatellite)}</Title>
    <TextContent>
        <Text component={TextVariants.p}>
            {intl.formatMessage(messages.subscribeSatelliteBody)}
        </Text>
        <Title headingLevel='h4'>{intl.formatMessage(messages.verifySatellite)}</Title>
        <TextList>
            <TextListItem>{intl.formatMessage(messages.verifySatelliteStepOne)}</TextListItem>
            <TextListItem>{intl.formatMessage(messages.verifySatelliteStepTwo)}</TextListItem>
        </TextList>
        <Text component={TextVariants.small}>{intl.formatMessage(messages.verifySatelliteNote,
            { link: <Button isInline component='a' variant='link' href='https://cert-api.accesss.redhat.com' >https://cert-api.accesss.redhat.com</Button> })}</Text>
    </TextContent>
</React.Fragment>;

export { learnMore, schema, DataCollection, SetupConfigure, SmartManagement, RegisterWithRhsm, SubscribetoSatellite };
