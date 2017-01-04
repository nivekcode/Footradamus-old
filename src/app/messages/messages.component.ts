/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Component, OnInit} from "@angular/core";
import MessageInterceptor from "./interceptor/messageInterceptor";

@Component({
  selector: 'messages',
  templateUrl: './messages.html'
})
export default class MessagesComponent{

  constructor(private messageInterceptor: MessageInterceptor){
  }
}
