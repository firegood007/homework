{{#if agents}}
	<div class="agents-content" id="tabsContent">
		<div class="row all" data-tab="all">
			<div class="col-xs-12">Will Develop</div>
		</div>	
		<div class="row physical navActive" data-tab="physical">
			<div class="col-md-9 col-xs-12 left">
				{{#each agents.server}}
				<div class="agentList row {{bgcolor Deny}}">
					<div class="col-md-1 col-xs-1 listIcon">
						<div class="roundIcon"></div>
					</div>
					<div class="col-md-11 col-xs-12 listInfor">
						<div class="row">
							<div class="col-xs-12 inforAdress">
								<span class="inforAdressName">bjstdmngbr{{id}}.thoughtworks.com</span>
								<span class="inforAdresslist">{{status}}
								</span><span class="inforAdresslist">{{ip}}
								</span><span class="inforAdresslist">{{path}}</span>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 inforContent">
								<span>+ <span class="specSour">Specify Resources</span></span>
								<span class="sourceTitle">Resources:</span>
								<span class="source">
									{{#each this.resources}}
									<span>{{resourceList}} <i class="fa fa-times-circle-o"></i></span>
									{{/each}}
								</span>
								<span class="deny {{render Deny}}">
									<i class="fa fa-ban"></i>
									<span>Deny</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				{{/each}}
			</div>
			<div class="col-md-3 col-xs-12 right">
				<div class="row">
					<div class="col-xs-12 title">
						<div>Summary</div>
					</div>
					<div class="col-xs-12 serverContent">
						{{#each agents.state}}
						<div class="row">
							<div class="col-xs-6">
								{{status}}
							</div>
							<div class="col-xs-6">
								{{num}}
							</div>
						</div>
						{{/each}}
					</div>
					<div class="col-xs-12 title">
						<div>history</div>
					</div>
					<div class="serverContent col-xs-12">
						<div class="row">
							{{#each agents.history}}
							<div class="col-xs-12 historyList">
								{{historyList}}
							</div>
							{{/each}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row virtual" data-tab="virtual">
			<div class="col-xs-12">Will Develop</div>
		</div>
	</div>
{{/if}}
