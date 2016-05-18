'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './index.js';

export default
class Demo extends React.Component {
    state = {
        name: 'Wim Mostmans'
    }

    _onChangeName = () => {
        this.setState({
            name: 'Foo Bar'
        });
    }

    render() {
        return (
            <div>
      <section>
        <h2>Gravatar</h2>
        <Avatar className="myCustomClass" md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={40} />
        <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={100} round={true} />
        <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} />
        <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={200} />
      </section>

      <section>
        <h2>Invalid gravatar</h2>
        <Avatar email="bla" name="Jim Jones" size={80} />
      </section>

      <section>
        <h2>Google+</h2>
        <Avatar googleId="116933859726289749306" size={40} />
        <Avatar googleId="116933859726289749306" size={100} round={true} />
        <Avatar googleId="116933859726289749306" size={150} />
        <Avatar googleId="116933859726289749306" size={200} />
      </section>

      <section>
        <h2>Facebook</h2>
        <Avatar facebookId="100008343750912" size={40} />
        <Avatar facebookId="100008343750912" size={100} round={true} />
        <Avatar facebookId="100008343750912" size={150} />
        <Avatar facebookId="100008343750912" size={200} />
      </section>

      <section>
        <h2>Skype</h2>
        <Avatar skypeId="sitebase" size={40} />
        <Avatar skypeId="sitebase" size={100} round={true} />
        <Avatar skypeId="sitebase" size={150} />
        <Avatar skypeId="sitebase" size={200} />
      </section>

      <section>
        <h2>Initials</h2>
        <div>
            <button onClick={this._onChangeName}>Change name</button>
        </div>
        <Avatar name={this.state.name} skypeId={this.state.skypeId} size={40} />
        <Avatar name={this.state.name} size={100} round={true}/>
        <Avatar name={this.state.name} size={150} />
        <Avatar name={this.state.name} size={200} />
      </section>

    <section>
        <h2>Value</h2>
        <Avatar value="86%" size={40} />
        <Avatar value="86%" size={100} round={true} />
        <Avatar value="86%" size={150} />
        <Avatar value="86%" size={200} />
      </section>

      <section>
        <h2>Fallback to static src</h2>
        <Avatar size={150} facebookId="invalidfacebookusername" src="https://thumbs.dreamstime.com/m/cute-monster-avatar-smiling-face-yellow-color-52010608.jpg" />
      </section>

      <section>
        <h2>Double fallback: Facebook to Google to initials</h2>
        <Avatar facebookId="invalidfacebookusername" googleId="invalidgoogleid" name="Sitebase" size={200} round={true}></Avatar>
      </section>
            </div>
        );
    }
}

var mountNode = document.getElementById('container');
ReactDOM.render(<Demo />, mountNode);
