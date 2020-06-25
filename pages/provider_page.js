'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    //creatingProviderHeader: '//h2[text()="Creating Provider"]',
    usernameField: '//div[@class="d-flex input-row"]//input[@name="username"]',
    emailField: '//div[@class="d-flex input-row"]//input[@name="email"]',
    firstNameField: '//input[@name="firstName"]',
    lastNameField: '//input[@name="lastName"]',
    titleField: '//select[@name="title"]',
    titleInDropDown(title) {return `//select[@name="title"]//option[text()='${title}']`},
    passwordField: '//input[@name="password"]',
    confirmPasswordField: '//div[@class="d-flex input-row"]//input[@name="confirmPassword"]',
    clinicIDField: `//label[text()="Clinic ID('s)"]/parent::div//div[@class='vs__selected-options']`,
    clinicIDInDropDown(clinicID) {return `//label[text()="Clinic ID('s)"]/parent::div//a[contains(.,"${clinicID}")]`},
    nationalProviderIdentifierField: '//label[text()="National Provider Identifier"]/parent::div//input',
    residencyField: '//input[@name="doctorResidency"]',
    addSpecialityButton: '//button[contains(.,"Add speciality")]',
    newSpecialityField: '//form[@class="form-group speciality-form"]//input[@name="doctorSpeciality"]',
    specialityInDropDown(speciality) {return `//form[@class="form-group speciality-form"]//input[@name="doctorSpeciality"]/parent::div//option[contains(.,"${speciality}")]`},
    addNewSpecialityButton: '//form[@class="form-group speciality-form"]//input[@name="doctorSpeciality"]/parent::div/following-sibling::div//button',
    degreeField: '//input[@list="degrees-ids"]',
    degreeInDropDown(degree) {return `//input[@name="doctorDegree"]/parent::div//option[text()="${degree}"]`},
    addLicenseButton: '//button[contains(.,"Add license")]',
    medicalLicenseCountryField: '//form[@class="license-form"]//select[@name="country"]',
    medicalLicenseCountryInDropDown(country) {return `//form[@class="license-form"]//select[@name="country"]//option[text()="${country}"]`},
    medicalLicenseStateField: '//form[@class="license-form"]//select[@name="state"]',
    medicalLicenseStateInDropDown(state) {return `//form[@class="license-form"]//select[@name="state"]//option[@value="${state}"]`},
    licenseField: '//form[@class="license-form"]//input[@name="licence"]',
    expiredField: '//form[@class="license-form"]//input[@name="date"]',
    expiredInDropDown(date) {return `//form[@class="license-form"]//input[@name="date"]/ancestor::fieldset//span[text()="${date}"]`},
    addNewLicenseButton: '//form[@class="license-form"]//button',
    dateOfBirthField: '//input[@name="dateOfBirth" and @class="form-control"]',
    genderRadioButton(gender) {return `//fieldset[@class="form-group"]//label[text()="${gender}"]`},
    contactPhoneTypeField: '//select[@name="numberType"]',
    contactPhoneTypeInDropDown(phone) {return `//select[@name="numberType"]//option[@value="${phone}"]`},
    countryCodeField: '//select[@name="countryCode"]',
    countryCodeInDropDown(code) {return `//select[@name="countryCode"]//option[text()="${code}"]`},
    phoneNumberField: '//input[@name="phoneNumber"]',
    countryField: '//select[@id="country"]',
    countryInDropDown(country) {return `//select[@id="country"]//option[@value="${country}"]`},
    stateField: '//select[@name="state"]',
    stateInDropDown(state) {return `//select[@name="state"]//option[text()="${state}"]`},
    zipCodeField: '//input[@name="zipCode"]',
    streetField: '//input[@name="street"]',
    cityField: '//input[@name="city"]',
    communicationModesCheckboxLabel(communication) {return `//div[@class="communication-list"]//label[contains(.,"${communication}")]`},
    communicationModesCheckbox(communication) {return `//div[@class="communication-list"]//label[contains(.,"${communication}")]/preceding-sibling::input[@type="checkbox"]`},
    paymentModeCheckboxLabel(payment) {return `//div[@class="custom-control custom-control-inline custom-radio"]//label[contains(.,"${payment}")]`},
    feeField: '//input[@name="fee"]',
    viewPermissionsCheckboxLabel(permission) {return `//h3[text()="View"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]`},
    viewPermissionsCheckbox(permission) {return `//h3[text()="View"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]/parent::label/preceding-sibling::input[@type="checkbox"]`},
    editPermissionsCheckboxLabel(permission) {return `//h3[text()="Edit"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]`},
    editPermissionsCheckbox(permission) {return `//h3[text()="Edit"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]/parent::label/preceding-sibling::input[@type="checkbox"]`},
    managePermissionsCheckboxLabel(permission) {return `//h3[text()="Manage"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]`},
    managePermissionsCheckbox(permission) {return `//h3[text()="Manage"]/ancestor::div[@class="permission-type"]//span[text()="${permission}"]/parent::label/preceding-sibling::input[@type="checkbox"]`},
    createProviderButton: '//button[contains(@class,"confirm-btn")]',
    resourceIDField: '//input[@name="resourceId"]',
    medicalSchoolField: '//input[@name="medicalSchool"]',
    fellowshipField: '//input[@name="doctorFellowship"]',
    languageField: '//label[text()="Language"]/parent::div//input',
    websiteField: '//input[@name="doctorWebsite"]',
    easyscriptEmailField: '//input[@name="easyscriptEmail"]',
    easyscriptPasswordField: '//input[@name="easyscriptPassword"]',
    specialitiesLabel(speciality) {return `//div[@class="form-group provider-specialities"]//span[text()="${speciality}"]`},
    licenseLabel(license, state, country) {return `//div[@class="form-group medical-licencees-group"]//span[text()="${license} ${state} ${country}"]`},
    clinicIDLabel(clinicID) {return `//label[contains(.,"Clinic ID")]/parent::div//span[contains(.,"${clinicID}")]`},
    languageLabel(language) {return `//div[@class="vs__selected-options"]//span[contains(.,"${language}")]`},
    uploadPhotoInput: '//div[@class="profile-picture"]//input',
    uploadedProviderPhoto(photo) {return `//div[@class="profile-picture"]//img[contains(@src,"${photo}")]`},




};
