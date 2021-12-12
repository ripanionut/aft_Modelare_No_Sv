import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const BsNavLink = (props) => {
  const { href, title, className = "" } = props;
  return (
    <Link href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </Link>
  );
};

const BsNavBrand = () => (
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">⚡ Ripan Ionut ⚡ </a>
  </Link>
);

const LoginLink = () => (
  <Link href="/api/auth/login">
  <a className="nav-link port-navbar-link ">
    Login
  </a>
  </Link>
);
const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Problema noua"
          />
        </DropdownItem>
        {/* <DropdownItem>
            <BsNavLink
              className="port-dropdown-item"
              href="/blogs/editor"
              title="Blog Editor"
            />
          </DropdownItem>
          <DropdownItem>
            <BsNavLink
              className="port-dropdown-item"
              href="/blogs/dashboard"
              title="Dashboard"
            />
          </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};
const LogoutLink = () => (
  <Link href="/api/auth/logout"> 
  <a className="nav-link port-navbar-link " >
    Logout
  </a>
  </Link>

);

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        dark
        expand="md"
      >
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem> */}
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Probleme" />
            </NavItem>
            <NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios/new" title="Problema noua" />
          </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
          {/*<NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios/new" title="new" />
          </NavItem>
             <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="onlyadmin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="onlyadminssr" />
            </NavItem> */}
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && (
                  <>
                    <AdminMenu />
                    <NavItem className="port-navbar-item">
                      <LogoutLink />
                    </NavItem>
                  </>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
