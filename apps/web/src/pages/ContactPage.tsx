export default function ContactPage() {
  return (
    <div className={'source-post_content'}>
      <div className={'source-cs-page'}>
        <p className={'source-cs-sr-only'}>
          {'株式会社黒岩農場へのお問い合わせ'}
        </p>
        <div>
          <p>
            {'\n      商品、お取引、採用などに関するご質問は、'}
            <br />
            {'\n      下記フォームよりご連絡ください。\n    '}
          </p>
          <p>
            <span className={'source-required-mark'}>{'*'}</span>
            {'必須項目\n    '}
          </p>
        </div>
        <div>
          <div className={'source-wpcf7 source-no-js'} id={'wpcf7-f23-p21-o1'}>
            <form
              className={'source-wpcf7-form source-init'}
              action={'https://kuroiwafarm.co.jp/contact/#wpcf7-f23-p21-o1'}
              method="post"
              aria-label={'お問い合わせフォーム'}
            >
              <p className="form-delivery-note">
                送信後は公式サイトへ移動し、送信結果が表示されます。
              </p>
              <fieldset className={'source-hidden-fields-container'}>
                <input type={'hidden'} name={'_wpcf7'} defaultValue={'23'} />
                <input
                  type={'hidden'}
                  name={'_wpcf7_version'}
                  defaultValue={'6.1.6'}
                />
                <input
                  type={'hidden'}
                  name={'_wpcf7_locale'}
                  defaultValue={'ja'}
                />
                <input
                  type={'hidden'}
                  name={'_wpcf7_unit_tag'}
                  defaultValue={'wpcf7-f23-p21-o1'}
                />
                <input
                  type={'hidden'}
                  name={'_wpcf7_container_post'}
                  defaultValue={'21'}
                />
                <input
                  type={'hidden'}
                  name={'_wpcf7_posted_data_hash'}
                  defaultValue={''}
                />
              </fieldset>
              <p>
                <label>
                  {' 会社名'}
                  <br />
                  <span className={'source-wpcf7-form-control-wrap'}>
                    <input
                      className={'source-wpcf7-form-control source-wpcf7-text'}
                      type={'text'}
                      name={'company-name'}
                      defaultValue={''}
                      maxLength={400}
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  {' お名前 '}
                  <span className={'source-required-mark'}>{'*'}</span>
                  <br />
                  <span className={'source-wpcf7-form-control-wrap'}>
                    <input
                      className={
                        'source-wpcf7-form-control source-wpcf7-text source-wpcf7-validates-as-required'
                      }
                      type={'text'}
                      name={'your-name'}
                      defaultValue={''}
                      maxLength={400}
                      required
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  {' メールアドレス '}
                  <span className={'source-required-mark'}>{'*'}</span>
                  <br />
                  <span className={'source-wpcf7-form-control-wrap'}>
                    <input
                      className={
                        'source-wpcf7-form-control source-wpcf7-email source-wpcf7-validates-as-required source-wpcf7-text source-wpcf7-validates-as-email'
                      }
                      type={'email'}
                      name={'your-email'}
                      defaultValue={''}
                      maxLength={400}
                      required
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  {' 電話番号 '}
                  <span className={'source-required-mark'}>{'*'}</span>
                  <br />
                  <span className={'source-wpcf7-form-control-wrap'}>
                    <input
                      className={
                        'source-wpcf7-form-control source-wpcf7-tel source-wpcf7-validates-as-required source-wpcf7-text source-wpcf7-validates-as-tel'
                      }
                      type={'tel'}
                      name={'phone-number'}
                      defaultValue={''}
                      maxLength={400}
                      required
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  {' お問い合わせ内容 '}
                  <span className={'source-required-mark'}>{'*'}</span>
                  <br />
                  <span className={'source-wpcf7-form-control-wrap'}>
                    <textarea
                      className={
                        'source-wpcf7-form-control source-wpcf7-textarea source-wpcf7-validates-as-required'
                      }
                      name={'your-message'}
                      rows={10}
                      cols={40}
                      maxLength={2000}
                      required
                    ></textarea>
                  </span>
                </label>
              </p>
              <p>
                <input
                  className={
                    'source-wpcf7-form-control source-wpcf7-submit source-has-spinner'
                  }
                  type={'submit'}
                  value="送信する"
                />
              </p>
            </form>
          </div>
          <br />
          <div>
            <p>{'お電話でのお問い合わせ'}</p>
            <p>{'011-522-5765'}</p>
            <p>{'受付時間 9:00-18:00(土日祝を除く)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
