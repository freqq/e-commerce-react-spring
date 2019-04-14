import React, { Component } from "react";
import './PasswordStrengthMeter.css'
import zxcvbn from "zxcvbn";

class PasswordStrengthMeter extends Component {
  createPasswordLabel = result => {
    switch (result.score) {
      case 0:
        return "Slabe";
      case 1:
        return "Slabe";
      case 2:
        return "Srednie";
      case 3:
        return "Dobre";
      case 4:
        return "Silne";
      default:
        return "Slabe";
    }
  };

  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    return (
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${this.createPasswordLabel(
            testedResult
          )}`}
          value={testedResult.score}
          max="4"
        />
        <label className={`password-strength-meter-label  lstrength-${this.createPasswordLabel(
            testedResult
          )}`}>
          {password && (
            <>
              <strong>{this.createPasswordLabel(testedResult)}</strong>
            </>
          )}
        </label>
      </div>
    );
  }
}

export default PasswordStrengthMeter;
