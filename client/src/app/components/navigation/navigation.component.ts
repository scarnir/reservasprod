import { Component, OnInit } from '@angular/core';
import { faHandHoldingUsd,
          faMoneyBillWave,
          faPiggyBank,
          faCreditCard,
          faSortNumericUpAlt,
          faMoneyCheck,
          faUserFriends,
          faUserTag,
          faExchangeAlt,
          faShieldAlt,
          faCity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faHandHoldingUsd = faHandHoldingUsd;
  faMoneyBillWave = faMoneyBillWave;
  faPiggyBank = faPiggyBank;
  faCreditCard = faCreditCard;
  faSortNumericUpAlt = faSortNumericUpAlt;
  faMoneyCheck = faMoneyCheck;
  faUserFriends = faUserFriends;
  faUserTag = faUserTag;
  faExchangeAlt = faExchangeAlt;
  faShieldAlt = faShieldAlt;
  faCity = faCity;

  constructor() { }

  ngOnInit(): void {
  }

}
