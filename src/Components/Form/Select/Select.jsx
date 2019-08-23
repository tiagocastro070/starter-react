import React from 'react';

import './Select.scss';

class Select extends React.Component {

	constructor(props) {
		super(props);
		this.myRef = React.createRef();

		this.hasLabel = this.hasLabel.bind(this);
	}

	hasLabel() {
		if ( this.props.label !== false ) {
			return (
				<label htmlFor={ this.props.id ? this.props.id : '' }>{ this.props.labelValue }</label>
			)
		}
	}

	componentDidMount() {
		const customSelect = this.myRef.current.querySelector('.my-select');

		var  j, selElmnt, a, b, c;

		selElmnt = customSelect.querySelector('select');

		// disable dropdown on mobile to use native instead
		// if (checkIfMobile() == true) {
			// selElmnt.classList.add('custom-select__mobile');
		// }

		// for each element, create a new DIV that will act as the selected item:
		a = document.createElement('DIV');
		a.setAttribute('class', 'select-selected');
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		customSelect.insertBefore(a, selElmnt);

		// for each element, create a new DIV that will contain the option list:
		b = document.createElement('DIV');
		b.setAttribute('class', 'select-items select-hide');

		for (j = 0; j < selElmnt.length; j++) {
			// for each option in the original select element,
			// create a new DIV that will act as an option item:
			c = document.createElement('DIV');
			c.innerHTML = selElmnt.options[j].innerHTML;

			c.addEventListener('click', function (e) {
				// when an item is clicked, update the original select box,
				// and the selected item:
				var i, s, h;
				s = this.parentNode.parentNode.getElementsByTagName('select')[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML === this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						break;
					}
				}
				h.click();
			});

			b.appendChild(c);
		}

		selElmnt.addEventListener('change', function () {
			console.log(this.parentNode.querySelector('.select-selected'));
			this.parentNode.querySelector('.select-selected').innerHTML = this.options[this.selectedIndex].text;
		});

		customSelect.insertBefore(b, selElmnt);

		a.addEventListener('click', function (e) {
			// when the select box is clicked, close any other select boxes,
			// and open/close the current select box:
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle('select-hide');
			this.classList.toggle('select-arrow-active');
		});

    function closeAllSelect(elmnt) {
        // a function that will close all select boxes in the document,
        // except the current select box:
        var x,
            y,
            i,
            arrNo = [];
        x = document.getElementsByClassName('select-items');
        y = document.getElementsByClassName('select-selected');

        for (i = 0; i < y.length; i++) {
            if (elmnt === y[i]) {
                arrNo.push(i);
            } else {
                y[i].classList.remove('select-arrow-active');
            }
        }

        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add('select-hide');
            }
        }
    }

    // if the user clicks anywhere outside the select box,
    // then close all select boxes:
	document.addEventListener('click', closeAllSelect);


	}

	render() {
		return (
			<div className="form-group" ref={this.myRef}>
				{ this.hasLabel() }
				<div className="my-select">
					<select
						name={this.props.name}
						id={this.props.selectid}
						className="form-control"
						required={this.props.required}
						data-msg={this.props.requiredMessage}>
							{this.props.children}
					</select>
				</div>
			</div>
		)
	}

}

Select.defaultProps = {
}

export default Select;