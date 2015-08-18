<% if @current_user.nil? %>
  <li><%= link_to "Register", users_signup_path %></li>
  <li><%= link_to "Login", users_login_path %></li>
<% else %>
  <li><%= link_to "Logout", users_logout_path %></li>
<% end %>
