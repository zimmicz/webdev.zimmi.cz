import React from 'react';
import { Typography } from '..';

const Newsletter = () => {
  return (
    <>
      <Typography.Paragraph>
        If I got your attention, may I get your e-mail as well? I&apos;ll keep it to myself and I&apos;ll send you a
        digest now and then.
      </Typography.Paragraph>
      <div className="sib-form p-0">
        <div id="sib-form-container" className="sib-form-container">
          <div id="error-message" className="sib-form-message-panel">
            {/* @ts-expect-error unknown element */}
            <my-sidenote-warning>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center my-sidenote-warning">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Your subscription could not be saved. Please try again.
                </span>
              </div>
              {/* @ts-expect-error unknown element */}
            </my-sidenote-warning>
          </div>
          <div></div>
          <div id="success-message" className="sib-form-message-panel">
            {/* @ts-expect-error unknown element */}
            <my-sidenote-success>
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
              </div>
              {/* @ts-expect-error unknown element */}
            </my-sidenote-success>
          </div>
          <div></div>
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical"
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://3f30c7d9.sibforms.com/serve/MUIEACX1kHYWSWa7aUVcptpdhYvH5fnP4b0M08dLXcbqVrQVTvdfdCpqUUZR0Q-hdLr9gnU68x5PPV-W4YXoqOs3iPpIGB2Avxu6MuD8N52XO4srJUErbGM7dEmcwUmhsOBLgGu3joupN7OHzQZPWBIdUO2KikOi3ZxUhg_oFMCS_1r9ScozjZ2q3ScKVWBTihBAG88bFOkeJSNt"
              data-type="subscription"
              className="space-y-3"
            >
              <div>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <div className="entry__field">
                        <input
                          className="input h-16 flex-shrink-0 flex-grow px-4 rounded-lg w-full bg-white box-border"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="Your e-mail"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        color: '#661d1d',
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div className="sib-form-block">
                <button
                  className="sib-form-block__button sib-form-block__button-with-loader bg-primary border-2 border-primary font-title text-2xl uppercase py-3 px-4 rounded-lg cursor-pointer text-white flex w-full items-center"
                  form="sib-form"
                  type="submit"
                >
                  <svg
                    className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  <span className="flex-grow justify-self-center">subscribe</span>
                </button>
              </div>
              <div>
                <div className="sib-optin sib-form-block" data-required="true">
                  <div className="form__entry entry_mcq">
                    <div className="form__label-row ">
                      <div className="entry__choice">
                        <label>
                          <input
                            type="checkbox"
                            className="input_replaced"
                            value="1"
                            id="OPT_IN"
                            name="OPT_IN"
                            required
                          />
                          <span className="checkbox checkbox_tick_positive"></span>
                          <span>
                            <p>I agree to receive your newsletters and accept the data privacy statement.</p>
                            <span
                              data-required="*"
                              style={{ display: 'inline' }}
                              className="entry__label entry__label_optin"
                            ></span>
                          </span>{' '}
                        </label>
                      </div>
                    </div>
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        color: '#661d1d',
                      }}
                    ></label>
                    <label
                      className="entry__specification"
                      style={{
                        color: '#8390A4',
                      }}
                    >
                      You may unsubscribe any time using the link in my newsletter.
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form__declaration">
                  <div className="declaration-block-icon">
                    <svg className="icon__SVG" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <symbol id="svgIcon-sphere" viewBox="0 0 63 63">
                          <path
                            className="path1"
                            d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z"
                            fill="#0092FF"
                          ></path>
                        </symbol>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <input type="text" name="email_address_check" value="" className="input--hidden" />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Newsletter };
