/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
    registerYourSystems: {
        id: 'registerYourSystems',
        description: 'Title',
        defaultMessage: 'Register your systems with Red Hat Insights'
    },
    preinstallationChecks: {
        id: 'preinstallationChecks',
        description: 'Title',
        defaultMessage: 'Preinstallation checks'
    },
    systemsManaged: {
        id: 'systemsManaged',
        description: 'Step one, first question',
        defaultMessage: 'How are the systems managed?'
    },
    viewInsightsDashboard: {
        id: 'viewInsightsDashboard',
        description: 'View Insights dashboard',
        defaultMessage: 'View Insights dashboard'
    },
    installTheClient: {
        id: 'installTheClient',
        description: 'Install the client and register your systems to Red Hat Insights',
        defaultMessage: 'Install the client and register your systems to Red Hat Insights'
    },
    rhel8: {
        id: 'rhel8',
        description: 'RHEL 8',
        defaultMessage: 'RHEL 8'
    },
    rhel76: {
        id: 'rhel76',
        description: 'RHEL 7 & 6',
        defaultMessage: 'RHEL 7 & 6'
    },
    downloadPuppet: {
        id: 'downloadPuppet',
        description: 'Download the Insights-client puppet module',
        defaultMessage: 'Download the Insights-client puppet module'
    },
    downloadModule: {
        id: 'downloadModule',
        description: 'Download module',
        defaultMessage: 'Download module'
    },
    installAndConfigure: {
        id: 'installAndConfigure',
        description: 'Install and configure your puppet module',
        defaultMessage: 'Install and configure your puppet module'
    },
    automatedInstallation: {
        id: 'automatedInstallation',
        description: 'Automated Installation',
        defaultMessage: 'Automated Installation'
    },
    manualInstall: {
        id: 'manualInstall',
        description: 'Manual Installation',
        defaultMessage: 'Manual Installation'
    },
    puppetAutomatedInstall: {
        id: 'puppetAutomatedInstall',
        description: 'Text for rhsm puppet automated installation',
        defaultMessage: `If you are using Red Hat Satellite's configuration management provided by puppet this process can be automated by applying the preinstalled Puppet class {class}. This class can be imported from the Puppet Master into t he appropriate Puppet enviroment and papplied to hots that you wish to subrscribe to Red Hat Insights.`
    },
    puppetAutomatedInstallMoInfo: {
        id: 'puppetAutomatedInstallMoInfo',
        description: 'Text for rhsm puppet automated installation mo info',
        defaultMessage: 'For more information on this topic, refer to the Creating a Host Group chapter in the official Satellite 6 User Guide.'
    },
    hostGroup: {
        id: 'hostGroup',
        description: 'Host Group chapter',
        defaultMessage: 'Host Group chapter'
    },
    rhSupported: {
        id: 'rhSupported',
        description: 'Red Hat-supported versions',
        defaultMessage: 'Red Hat-supported versions'
    },
    operatingSystem: {
        id: 'operatingSystem',
        description: 'OS',
        defaultMessage: 'Operating System'
    },
    operatingSystemNote: {
        id: 'operatingSystemNote',
        description: 'OS note',
        defaultMessage: 'Note: Red Hat Insights can be used on all {rhSupported} of Red Hat Enterprise Linux, version 6.4 and later.'
    },
    stepOneTitle: {
        id: 'stepOneTitle',
        description: 'Step one',
        defaultMessage: 'Step 1: Tell us about your systems'
    },
    deployRHI: {
        id: 'deployRHI',
        description: 'Deploy Red Hat Insights using Puppet in Satellite',
        defaultMessage: 'Deploy Red Hat Insights using Puppet in Satellite'
    },
    stepNumberTitle: {
        id: 'stepNumberTitle',
        description: 'Step number and title is variable',
        defaultMessage: 'Step {number}: {variable}'
    },
    rhsChooseConfigMan: {
        id: 'rhsChooseConfigMan',
        description: 'Choose a configuration management tool',
        defaultMessage: 'Choose a configuration management tool'
    },
    rhsChooseConfig: {
        id: 'rhsChooseConfig',
        description: 'Note: you can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.',
        defaultMessage: 'Note: you can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.'
    },
    rhsm: {
        id: 'rhsm',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'Red Hat Subscription Manager'
    },
    registerRhsm: {
        id: 'registerRhsm',
        description: 'Red Hat Subscription Manager',
        defaultMessage: 'Register with RHSM'
    },
    registerRhsmText: {
        id: 'registerRhsmText',
        description: 'Red Hat Subscription Manager text body',
        defaultMessage: 'You must register all Red Hat Enterprise Linux (RHEL) systems with Red Hat Subscription Manager to recieve necessary updates and to resolve software dependencies.'
    },
    registerRhsmTextNote: {
        id: 'registerRhsmTextNote',
        description: 'Red Hat Subscription Manager text note',
        defaultMessage: 'Note: If the system cannot be subscribed to RHSM, {basicAuth} can be configured on the client.'
    },
    registerRhsmTextNoteAfter: {
        id: 'registerRhsmTextNoteAfter',
        description: 'Red Hat Subscription Manager text note after',
        defaultMessage: 'If you have a web-based proxy between your system and the Internet, you can configure the insights-client to connect through it. For more information, refer to {howToAccess}.'
    },
    basicAuth: {
        id: 'basicAuth',
        description: 'basic authentication',
        defaultMessage: 'basic authentication'
    },
    howToAccess: {
        id: 'howToAccess',
        description: 'How to access Red Hat Insights through a firewall/Proxy',
        defaultMessage: 'How to access Red Hat Insights through a firewall/Proxy'
    },
    rhs: {
        id: 'rhs',
        description: 'Red Hat Satellite',
        defaultMessage: 'Red Hat Satellite'
    },
    publicCloud: {
        id: 'publicCloud',
        description: 'Public cloud',
        defaultMessage: 'Public cloud/RHUI'
    },
    dataCollection: {
        id: 'dataCollection',
        description: 'Data collection & controls',
        defaultMessage: 'Data collection & controls'
    },
    learnMore: {
        id: 'learnMore',
        description: 'Learn more',
        defaultMessage: 'Learn more'
    },
    setupConfigure: {
        id: 'setupConfigure',
        description: 'Setup and Configure',
        defaultMessage: 'Setup and Configure'
    },
    assessAndMonitor: {
        id: 'assessAndMonitor',
        description: 'Assess and monitor the compliance of your RHEL systems using Policies',
        defaultMessage: 'Assess and monitor the compliance of your RHEL systems using Policies'
    },
    detectAndNotify: {
        id: 'detectAndNotify',
        description: 'Detect and be notified of system configuration changes using Custom Policies',
        defaultMessage: 'Detect and be notified of system configuration changes using Custom Policies'
    },
    rhSM: {
        id: 'rhSM',
        description: 'Red Hat® Smart Management',
        defaultMessage: 'Red Hat® Smart Management'
    },
    combineTheFlexible: {
        id: 'combineTheFlexible',
        description: 'Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights',
        defaultMessage: 'Combines the flexible and powerful infrastructure management capabilities of Red Hat Satellite with the ability to execute remediation plans from Red Hat Insights'
    },
    subscribeSatellite: {
        id: 'subscribeSatellite',
        description: 'Subscribe hosts to the Satellite server',
        defaultMessage: 'Subscribe hosts to the Satellite server'
    },
    subscribeSatelliteBody: {
        id: 'subscribeSatelliteBody',
        description: 'Subscribe hosts to the Satellite server -body',
        defaultMessage: 'This step is typically already performed as par of Satellite host configuration.  Only RHEL hosts registered to the particular Satellite server will have reports available in the Satellite UI.'
    },
    verifySatellite: {
        id: 'verifySatellite',
        description: 'Verify Satellite server connection to Red Hat Insights',
        defaultMessage: 'Verify Satellite server connection to Red Hat Insights'
    },
    verifySatelliteStepOne: {
        id: 'verifySatelliteStepOne',
        description: 'In the Satellite UI, navigate to Insighst > Manage.',
        defaultMessage: 'In the Satellite UI, navigate to Insighst > Manage.'
    },
    verifySatelliteStepTwo: {
        id: 'verifySatelliteStepTwo',
        description: 'Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.',
        defaultMessage: 'Verify under Insights Engine Connection that the status is Connected and the Account Number field displays the correct information for your organization.'
    },
    verifySatelliteNote: {
        id: 'verifySatelliteNote',
        description: 'Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.',
        defaultMessage: 'Satellite organization with Red Hat Insights must be operating in Connected mode. Any firewalls or proxies through which the Satellite server communicates to Red Hat must allow https communications to {link}.'
    },
    useAutomation: {
        id: 'useAutomation',
        description: 'Use automation',
        defaultMessage: 'Do you wish to use automation for installation?'
    },
    automationNote: {
        id: 'automationNote',
        description: 'Automation note',
        defaultMessage: 'Note: You can automate the installation and registration of systems with Ansible, included with your Red Hat Enterprise Linux entitlement.'
    },
    ansible: {
        id: 'ansible',
        description: 'Ansible',
        defaultMessage: 'Ansible'
    },
    puppet: {
        id: 'puppet',
        description: 'Puppet',
        defaultMessage: 'Puppet'
    },
    no: {
        id: 'no',
        description: 'No',
        defaultMessage: 'No'
    }
});
